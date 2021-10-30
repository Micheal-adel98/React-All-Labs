import { Card } from "../Card";

export const Todo = (props) => {
  return <Card>
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
  </Card>;
};
