const display = document.getElementById("tasks");

if (taskList.length == 0)
	display.innerHTML = "No tasks to show";

for (const tsk of taskList) {
	display.innerHTML +=
		"<p>" + tsk.name + " - " + tsk.status + "</p>";
}
