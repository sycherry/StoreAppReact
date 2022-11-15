export interface TextareaProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
    errors: any;
    touched: any;
}
