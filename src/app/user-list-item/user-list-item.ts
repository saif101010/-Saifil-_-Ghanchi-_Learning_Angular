// student-list.component.ts
ngOnInit(): void {
  console.log('Custom Pipe Initialized - Version 2.0.'); // <-- ADD THIS
  this.studentService.getStudents().subscribe(students => {
    this.userList = students;
  });
}
