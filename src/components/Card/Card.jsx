import Icon from '../Icon/Icon';
import './card.css';

function Card({player, onPlay, index}){
    let icon = <Icon/>
    if(player == 'X'){
        icon = <Icon name="cross"/>
    }
    else if(player =='o'){
        icon = <Icon name="circle"/>
    }
    return(
        <div className='card' onClick={()=> onPlay(index)}>
           {icon}
        </div>
    )

}
export default Card;