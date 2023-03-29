import { Component, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

class Button extends Component<Props> {
  render() {
    return (
      <button
        className="bg-blue-900 text-white font-bold py-2 px-8 
    rounded-full border border-white hover:bg-blue-700 active:bg-blue-800 "
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;