class Modal extends React.Component{
  render(){
    return(
    <form>
      <div class="modal-body">
        <p>Add the recipe to your calendar</p>
      </div>
      <div>
        Select Day:
        <select>
          <option value='Monday'>Monday</option>
          <option value='Tuesday'>Tuesday</option>
          <option value='Wednesday'>Wednesday</option>
          <option value='Thursday'>Thursday</option>
          <option value='Friday'>Friday</option>
          <option value='Saturday'>Saturday</option>
          <option value='Sunday'>Sunday</option>
        </select>
      </div>
      <div class="modal-footer">
        <input type="radio" class="btn btn-secondary" data-dismiss="modal">Lunch</input>
        <input type="radio" class="btn btn-primary">Dinner</input>
      </div>
    </form>
      
    )
  }
}
