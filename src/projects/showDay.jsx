function ShowDay() {
    const data = new Date();
    const currentTime = data.getHours();
    let upDateValue;

    const colorPropertity = {
        color: ''
    }

    if (currentTime < 12) {
        upDateValue = "Good Morning Sir"
        colorPropertity.color = 'Red'
    }else if(currentTime >=12 && currentTime <= 18){
        upDateValue = "Good Afternon Sir"
        colorPropertity.color = 'Blue'
    }else{
        upDateValue = "Good Night Sir"
        colorPropertity.color = 'yellow'
    }
  return (
    <div>
      <h1 style={colorPropertity}>{upDateValue}</h1>
    </div>
  )
}

export default ShowDay
