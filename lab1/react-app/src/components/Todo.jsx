export const Todo=(props)=>{
  return(
      <div>
          <ul>
              <li>
                  {props.title}
              </li>
              <div>
                  {props.body}
              </div>
          </ul>
  
      </div>
  
      
  );
  };