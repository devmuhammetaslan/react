import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([{ text: "Eat breakfast", completed: false }]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function AddTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, { text: newTask, completed: false }]);
            setNewTask(""); // Input kutusunu temizler
        }
    }

    function toggleTaskCompletion(index) {
        const updatedTasks = [...tasks];
        // İlgili index'teki görevin "completed" değerini tersine çevir (true ise false, false ise true yap)
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskUp(index){
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="Bir görev gir..."
                    value={newTask}
                    onChange={handleInputChange} 
                />
                <button onClick={AddTask}>Ekle</button>
            </div>

            <div>
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {/*Checkbox Eklemesi */}
                            <input 
                                type="checkbox" 
                                checked={task.completed} 
                                onChange={() => toggleTaskCompletion(index)} 
                            />
                            
                            {/*Tamamlandıysa yazının üstünü çiz */}
                            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                {task.text}
                            </span>
                            
                            <button onClick={() => deleteTask(index)}>Sil</button>
                            <button onClick={() => moveTaskUp(index)}>🔼</button>
                            <button onClick={() => moveTaskDown(index)}>🔽</button>
                        </li>
                    ))}
                </ol>
            </div>
            <br /><br /><br /><br />
        </div>
    );
}

export default ToDoList;