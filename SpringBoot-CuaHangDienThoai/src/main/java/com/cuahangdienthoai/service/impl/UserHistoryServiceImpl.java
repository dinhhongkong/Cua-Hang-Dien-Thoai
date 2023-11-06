package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.UserHistory;
import com.cuahangdienthoai.repository.UserHistoryRepository;
import com.cuahangdienthoai.service.UserHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserHistoryServiceImpl implements UserHistoryService {

    private UserHistoryRepository userHistoryRepository;
    @Autowired
    public void setUserHistoryRepository(UserHistoryRepository userHistoryRepository){
        this.userHistoryRepository = userHistoryRepository;
    }
    @Override
    public void save(UserHistory userHistory) {
        userHistoryRepository.save(userHistory);
    }
}
