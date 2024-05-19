document.querySelector("#addTask").onclick = function () {
  if (document.querySelector("#AddTask input").value.length == 0) {
    alert("please enter task");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
        <span id="taskName">
            ${document.querySelector("#AddTask input").value}
        </span>
    </div>
    `;
  }
};
