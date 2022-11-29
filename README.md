-  xóa phần tử phải có id của phần tử đó

2 cách: + xóa thẳng trên database của server + xóa trên kho redux

array.filter(item => item !== videoDelete.id)
arrat.splice(index, 1)
cập nhật lại store

-  chỉnh sửa
   b1: lấy đc thông tin card cần xóa
   b2: setState
   cập nhật lại store

-  useState luôn
-  redux
