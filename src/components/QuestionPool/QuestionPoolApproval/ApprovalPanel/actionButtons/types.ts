export interface ActionButtonProps {
  icon: string;
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}
