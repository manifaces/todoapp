import { useSelector } from 'react-redux';

import { tagsSelector } from '../../../store/selectors';
import './ToDoTags.scss';

export type ToDoTagsProps = {
  setCategory: (category: string) => void;
  radioButtons: React.MutableRefObject<HTMLInputElement[]>;
}

export const ToDoTags: React.FC<ToDoTagsProps> = ({ setCategory, radioButtons }) => {
  const tags = useSelector(tagsSelector);
  return (
    <div className="todo-tags">
      {tags.map((tag, i) =>
        <div className="todo-tags__item" key={i} data-category={tag}>
          <input 
            type="radio" 
            name="tags" 
            id={tag} 
            value={tag} 
            ref={(el) => {
              if (el !== null && !radioButtons.current.includes(el)) {
                radioButtons.current.push(el);
              }
            }}
            onChange={(e) => setCategory(e.target.value)} 
            className="todo-tags__radio" 
          />
          <label htmlFor={tag}></label>
          <span className="todo-tags__plug"></span>
          <span className="todo-tags__text">{tag}</span>
        </div>
      )}
    </div>
  );
};