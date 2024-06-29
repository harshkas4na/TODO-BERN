import { useState } from "react";
import Navigation from "../components/Navigation";
const DeleteTask =({state})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const closeModal = () => {
        setModalVisible(false);
        setModalContent("");
        };

    const {contract,account}=state;
        console.log(contract);
    const deleteTask=async(event)=>{
        event.preventDefault();
        const taskID = document.querySelector("#taskID").value;
        try{
            await contract.methods.deleteTask(taskID).send({from:account});
            setModalContent(`Task ID ${taskID} deleted`);
            setModalVisible(true);
        }catch (error) {
            setModalContent("Task cannot be deleted");
            setModalVisible(true);
        }
    }



    return<>
    <Navigation/>
    <div className="delete_task todo_btn">
        <form onSubmit={deleteTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <button type="submit">Delete Task</button>
        </form>

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </>
}
export default DeleteTask;