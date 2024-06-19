import { ReactNode, useState } from "react"
import { getFiberContent } from "../getFiberContent";

interface FormProps {
    onSubmit: (value: string) => void;
  }

export default function Form({onSubmit}: FormProps): JSX.Element {
    const [inputValue, setInputValue] = useState<string>('');
    const [fiberContent, setfiberContent] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setfiberContent(getFiberContent(inputValue));
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
          <button type="submit">Submit</button>
        </form>
        <div>{fiberContent}</div>
        </>
      );
}