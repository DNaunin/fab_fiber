import { useState } from "react"
import { getFiberContent } from "../getFiberContent";
import { isLowFodmap } from "../isLowFodmap";

interface FormProps {
    onSubmit: (value: string) => void;
  }

export default function Form({onSubmit}: FormProps): JSX.Element {
    const [inputValue, setInputValue] = useState<string>('');
    const [fiberContent, setfiberContent] = useState('');
    const [lowFodmap, setLowFodmap] = useState<string>('');
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setfiberContent(getFiberContent(inputValue));
      setLowFodmap(isLowFodmap(inputValue));
      setInputValue('');
    };
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your text here"
          />
          <button type="submit">Tell me about this food item!</button>
        </form>
        <div>{fiberContent}</div>
        <div>{lowFodmap}</div>
        </>
      );
}