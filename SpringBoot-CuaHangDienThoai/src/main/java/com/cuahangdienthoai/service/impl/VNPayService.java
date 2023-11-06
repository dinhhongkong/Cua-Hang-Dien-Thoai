package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.config.VNPayConfig;
import com.cuahangdienthoai.dto.DeviceQuantityDTO;
import com.cuahangdienthoai.dto.PaymentInfoDTO;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.entity.chitietdonhang.ChiTietDonHang;
import com.cuahangdienthoai.repository.DeviceRepository;
import com.cuahangdienthoai.repository.DonHangRepository;
import com.cuahangdienthoai.repository.GioHangRepository;
import com.cuahangdienthoai.service.CTDHService;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class VNPayService {

    private DonHangRepository donHangRepository;
    private DeviceService deviceService;

    private CTDHService ctdhService;

    @Autowired
    public void setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @Autowired
    public void setDonHangRepository(DonHangRepository donHangRepository) {
        this.donHangRepository = donHangRepository;
    }

    @Autowired
    public void setCtdhService(CTDHService ctdhService) {
        this.ctdhService = ctdhService;
    }

    @Transactional
    public String  handleOrderInfo(User user, PaymentInfoDTO paymentInfo, String urlReturn ) {
        DonHang donHang = new DonHang();
        donHang.setUser(user);
        donHang.setSdt(paymentInfo.getPhone());
        donHang.setTenNguoiNhan(paymentInfo.getName());
        donHang.setDiaChi(paymentInfo.getAddress());
        donHang.setGhiChu("");
        donHang.setNgayLap( new Date());
        donHang.setMaThanhToan(1);
        donHang.setTrangThai(0);

        donHang = donHangRepository.save(donHang);

        for(DeviceQuantityDTO item: paymentInfo.getDevices()) {
            ChiTietDonHang ctDonHang = new ChiTietDonHang();
            Device device = deviceService.findById(item.getDeviceId());
            device.setId(item.getDeviceId());
            ctDonHang.setDevice(device);
            ctDonHang.setDonHang(donHang);
            ctDonHang.setSoLuong(item.getQuantity());
            ctDonHang.setGia(device.getGia());
            ctdhService.save(ctDonHang);
        }
        String orderInfo = user.getId().toString() + " thanh toan don hang " + donHang.getId();
        int total = 0;
        for ( DeviceQuantityDTO item : paymentInfo.getDevices()) {
            Device device = deviceService.findById(item.getDeviceId());
            total += (int) (device.getGia() * item.getQuantity());
        }
        return createOrder(total, orderInfo, urlReturn);

    }




    private String createOrder(int total, String orderInfo, String urlReturn){
        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String vnp_TxnRef = VNPayConfig.getRandomNumber(8);
        String vnp_IpAddr = "127.0.0.1";
        String vnp_TmnCode = VNPayConfig.vnp_TmnCode;
        String orderType = "110000";

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(total*100));
        vnp_Params.put("vnp_CurrCode", "VND");

        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", orderInfo);
        vnp_Params.put("vnp_OrderType", orderType);

        String locate = "vn";
        vnp_Params.put("vnp_Locale", locate);

        urlReturn += VNPayConfig.vnp_ReturnUrl;
        vnp_Params.put("vnp_ReturnUrl", urlReturn);
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                try {
                    hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                    //Build query
                    query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                    query.append('=');
                    query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = VNPayConfig.hmacSHA512(VNPayConfig.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = VNPayConfig.vnp_PayUrl + "?" + queryUrl;
        return paymentUrl;
    }

    public int orderReturn(HttpServletRequest request, String orderInfo,long userId){
        Map fields = new HashMap();
        for (Enumeration params = request.getParameterNames(); params.hasMoreElements();) {
            String fieldName = null;
            String fieldValue = null;
            try {
                fieldName = URLEncoder.encode((String) params.nextElement(), StandardCharsets.US_ASCII.toString());
                fieldValue = URLEncoder.encode(request.getParameter(fieldName), StandardCharsets.US_ASCII.toString());
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                fields.put(fieldName, fieldValue);
            }
        }

        String vnp_SecureHash = request.getParameter("vnp_SecureHash");
        if (fields.containsKey("vnp_SecureHashType")) {
            fields.remove("vnp_SecureHashType");
        }
        if (fields.containsKey("vnp_SecureHash")) {
            fields.remove("vnp_SecureHash");
        }
        String signValue = VNPayConfig.hashAllFields(fields);
        if (signValue.equals(vnp_SecureHash)) {
            if ("00".equals(request.getParameter("vnp_TransactionStatus"))) {
                Pattern pattern = Pattern.compile("\\d+");
                Matcher matcher = pattern.matcher(orderInfo);

                List<String> numbers = new ArrayList<>();
                // Lặp qua các kết quả tìm thấy
                while (matcher.find()) {
                    numbers.add(matcher.group());
                }

                // Kiểm tra nếu có ít nhất 2 số nguyên trong danh sách
                if (numbers.size() >= 2) {
                    // Lấy số đầu tiên và số cuối cùng trong danh sách
                    String firstNumber = numbers.get(0);
                    String lastNumber = numbers.get(numbers.size() - 1);
                    DonHang donhang = donHangRepository.findById(Long.parseLong(lastNumber));
                    donhang.setMaThanhToan(2);
                    System.out.println("Số cuối cùng: " + lastNumber);
                } else {
                    System.out.println("Không tìm thấy đủ số nguyên trong chuỗi.");
                }
                return 1;
            } else {
                return 0;
            }
        } else {
            return -1;
        }
    }
}
