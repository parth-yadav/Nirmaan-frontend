export interface OptionProps {
  text: string;
  isCorrect?: boolean;
}

export interface ApprovalNotificationProps {
  name: string;
  message: string;
}

export interface ActionButtonProps {
  icon: string;
  label: string;
  variant: "red" | "green" | "dark";
  onClick?: () => void;
}
