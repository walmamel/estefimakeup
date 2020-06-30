import React from 'react'

export default function Table(props) {
    
    let Occupied_hours = [];
    if (props.data.length > 0){
        props.data.forEach(element => {
            Occupied_hours.push({
                low_limit_hour: parseInt(element.split('-')[0].split(':')[0],10),
                low_limit_min: parseInt(element.split('-')[0].split(':')[1],10),
                high_limit_hour: parseInt(element.split('-')[1].split(':')[0],10),
                high_limit_min: parseInt(element.split('-')[1].split(':')[1],10)
            })
        });
    }
    Occupied_hours.sort((a,b)=>{
        if(a.low_limit_hour>b.low_limit_hour){
            return 1
        }
        if(b.low_limit_hour>a.low_limit_hour){
            return -1
        }
        return 1

    })
    
    let selected_hour = null
    if(props.selected_hour.length > 0){
        selected_hour = {
            low_limit_hour: parseInt(props.selected_hour.split('-')[0].split(':')[0],10),
            low_limit_min: parseInt(props.selected_hour.split('-')[0].split(':')[1],10),
            high_limit_hour: parseInt(props.selected_hour.split('-')[1].split(':')[0],10),
            high_limit_min: parseInt(props.selected_hour.split('-')[1].split(':')[1],10)
        }
    }

    //Create Date Objects

    let toolDate = new Date();
    let OccupiedHours_Date = null;
    let selectedHours_Date = null;
    let currDate = null;

    let crossDate = false;

    if(selected_hour){
        selectedHours_Date = {
            low_limit: toolDate.setHours(selected_hour.low_limit_hour,selected_hour.low_limit_min,0,0),
            high_limit: toolDate.setHours(selected_hour.high_limit_hour,selected_hour.high_limit_min,0,0)
        }
    }


    if(Occupied_hours){
        OccupiedHours_Date = Occupied_hours.map(item=>{
            return{
                low_limit: toolDate.setHours(item.low_limit_hour, item.low_limit_min,0,0),
                high_limit: toolDate.setHours(item.high_limit_hour, item.high_limit_min,0,0)
            }
        })
    }


    if( selected_hour && Occupied_hours) {
        
        OccupiedHours_Date.forEach(item => {
            if((selectedHours_Date.low_limit> item.low_limit) && (selectedHours_Date.low_limit < item.high_limit)){
                crossDate = true;
            }
            if((item.low_limit > selectedHours_Date.low_limit) && (item.high_limit < selectedHours_Date.high_limit)){
                crossDate = true
            }
            if(selected_hour.low_limit_hour < props.init_hour){
                crossDate = true
            }
            
        });


        


    }

    //Create table with all hours
    let init_hour = props.init_hour;
    let last_hour = props.last_hour;

    let content = [];
    let min = ''
    let i = 0;
    let classname = 'freeHour';
    let message = ''
    let locked = false;
    let slocked = false;
    let func = props.handleClick;
    let displayed = true;
    let next_hour = null;
    let next_min = null;
    let finished = false;
    for (let hour = init_hour; hour < last_hour; hour++) {
         for (let minutes = 0; minutes < 60; minutes= minutes + 15) {
            if(minutes === 0){
                min = '00'
            }else{
                min = minutes
            }
            currDate = toolDate.setHours(hour,min,0,0)
            if (props.data.length > 0){
                if((currDate >= OccupiedHours_Date[i].low_limit) && !locked && !finished){
                        classname = 'occupiedHour'
                        message= 'not free'
                        locked = true;
                        func = null;
                }
                
                if((currDate >= OccupiedHours_Date[i].high_limit) && locked && !finished){
                    console.log('occ hours high')
                        classname = 'freeHour'
                        message = ''
                        locked = false
                        i = i + 1;
                        func = props.handleClick;
                        if(i > Occupied_hours.length - 1){
                            i = Occupied_hours.length - 1
                            finished = true
                        }
                }
            }
            if(selected_hour && displayed && !locked && !crossDate){
                
                if((currDate >= selectedHours_Date.low_limit)  && !slocked){
                    console.log('heeere')
                        classname = 'selectedHour'
                        message= 'selected'
                        slocked = true;
                        func = props.handleClick
                }
                
                if((currDate >= selectedHours_Date.high_limit) && slocked){
                    console.log('heeere ends')
                        classname = 'freeHour'
                        message = ''
                        slocked = false
                        displayed = false
                        func = props.handleClick
                }
            }

            if(min === 45){
                next_hour = hour + 1;
                next_min = '00'
            }else{
                next_min = minutes + 15
                next_hour = hour
            }

            content.push(
                <tr key={`${hour}:${min}`}>
                    <td onClick={func} id = {`${next_hour}:${next_min}`}>{`${hour}:${min}-${next_hour}:${next_min}`}</td>
                    <td onClick={func} id = {`${next_hour}:${next_min}`} className={classname}>{message}</td>
                </tr>
            )
        }
    }

    return (
        <div className="over">
            <table id="dateTable">
                <thead>
                    <tr>
                        <th>Hours</th>
                        <th className="slots">Slots</th>
                    </tr>
                </thead>
                <tbody>
                        {content}
                </tbody>
            </table>
        </div>
    )
}
