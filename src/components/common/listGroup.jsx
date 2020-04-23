import React from 'react';

const ListGroup = (props) => {
    const { 
           items, 
           textProperty, 
           valueProperty,
           selectedItem,
           onItemSelect
           } = props;
    return (
    <ul className="pagination">
      { items.map(item => (
          item.name !== 'Thriller' && 
          <li 
             key={item[valueProperty]}
             className={
                   item === selectedItem ? "page-item  active" :"page-item "
                 }
             >
             <a
               onClick={()=>onItemSelect(item)}
               className='page-link'
               >
             {item[textProperty]}
             </a>
          </li>
         
      )) }
 </ul>
    )
}
 
export default ListGroup;