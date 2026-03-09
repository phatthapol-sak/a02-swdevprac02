function validateForm() {
    let petCount = document.getElementById("pet_count").value;

    if(petCount == "" || petCount < 0 || petCount > 100) {
        alert("จำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบัน ต้องมีการใส่ค่ามา และค่าต้องเป็นตัวเลข ค่าระหว่าง 0 ถึง 100 เท่านั้น");
        return false;
    }

    let confirmCheckbox = document.getElementById("confirm");
    if(!confirmCheckbox.checked) {
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
        return false;
    }

    return true;
}