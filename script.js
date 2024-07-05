let students = [];
let attendanceRecords = [];

// Function to add a student
function addStudent() {
    const studentName = document.getElementById('studentName').value;
    if (studentName) {
        const studentId = students.length + 1;
        students.push({ id: studentId, name: studentName });
        updateStudentSelect();
        document.getElementById('studentName').value = '';
        alert('تم إضافة الطالب بنجاح!');
    } else {
        alert('يرجى إدخال اسم الطالب.');
    }
}

// Function to update the student dropdown
function updateStudentSelect() {
    const studentSelect = document.getElementById('studentSelect');
    studentSelect.innerHTML = '';
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.textContent = student.name;
        studentSelect.appendChild(option);
    });
}

// Function to record attendance
function recordAttendance(status) {
    const studentId = document.getElementById('studentSelect').value;
    if (studentId) {
        const date = new Date().toISOString().split('T')[0];
        attendanceRecords.push({ studentId, date, status });
        alert('تم تسجيل الحضور بنجاح!');
    } else {
        alert('يرجى اختيار طالب.');
    }
}

// Function to display attendance
function displayAttendance() {
    const attendanceList = document.getElementById('attendanceList');
    attendanceList.innerHTML = '';
    attendanceRecords.forEach(record => {
        const student = students.find(s => s.id == record.studentId);
        const row = document.createElement('tr');
        row.innerHTML = `<td>${student.name}</td><td>${record.date}</td><td>${record.status}</td>`;
        attendanceList.appendChild(row);
    });
}

// Function to print attendance
function printAttendance() {
    window.print();
}

// Initialize the student select dropdown
updateStudentSelect();
