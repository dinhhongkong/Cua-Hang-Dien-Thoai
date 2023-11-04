# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List


from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet
from .database_connectivity import Get_device_name, Get_price

class FormGetDevice(Action):
    def name(self) -> Text:
        return "action_extract_device"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        device_name = next(tracker.get_latest_entity_values("device_name"), None)
        query = Get_device_name(device_name)
        if query is None:
            dispatcher.utter_message(text=f"Xin lỗi anh chị, em không tìm ra thông tin điện thoại anh chị đã nhập, anh chị có thể sử dụng thử thanh tìm kiếm để kiểm tra dễ dàng hơn")
            return []
        else:
            dispatcher.utter_message(text=f"Em xin gửi thông tin của sản phẩm {query[0]['device_name']} có hệ điều "
                                          f"hành: {query[0]['os']}, ram: {query[0]['ram']}, đi kèm theo đó là cpu: {query[0]['cpu']}, bộ nhớ trong lên đến: {query[0]['storage']}, với dung lượng pin: {query[0]['battery_size']} ạ!")
            return [SlotSet("device_name", query[0])]


class FormGetDeviceOs(Action):
    def name(self) -> Text:
        return "action_extract_device_os"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # device_os = tracker.get_slot("os")
        device_os = next(tracker.get_latest_entity_values("os"), None)
        if device_os == "android":
            dispatcher.utter_message(text=f"bên em đang có một số điện thoại {device_os} tuyệt vời trên thị trường. Anh chị muốn tìm hiểu về điện thoại của hãng nào? Ví dụ: Samsung, Xiaomi, hoặc OnePlus.")
            return [SlotSet("device_name", device_os)]
        elif device_os == "ios":
            dispatcher.utter_message(text=f"anh chị muốn sản phẩm nào của {device_os} ạ")
            return [SlotSet("device_name", device_os)]
        else:
            dispatcher.utter_message(text=f"Bên em không có điện thoại nào thuộc hđh {device_os}. ")
        return []

class GetDevicePrice(Action):
    def name(self) -> Text:
        return "action_get_device_price"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        device_name = tracker.get_slot("device_name")
        if device_name == None:
            dispatcher.utter_message(text=f"Xin lỗi, không biết là anh chị đang hỏi giá của sản phẩm nào ạ")
        else:
            price = Get_price(device_name)  # Điều này phụ thuộc vào cách bạn lấy giá cả
            dispatcher.utter_message(text=f"Giá của {device_name} hiện bên em đang bán với giá {price} VND ạ.")
        return []



