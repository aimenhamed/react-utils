import { Icon } from "../Icon";
import { Text } from "../Text";
import { CloseLockup, Dim, ModalContent } from "./style";
import { DialogProps } from "./types";

export const Dialog = ({
  close,
  closeIcon,
  title,
  children,
  modalSize,
}: DialogProps) => {
  return (
    <Dim>
      <ModalContent style={{ width: modalSize ? `${modalSize}%` : "85%" }}>
        {closeIcon && (
          <CloseLockup>
            <Icon src={closeIcon} size={1} onClick={close} />
          </CloseLockup>
        )}
        {title && (
          <Text bold fontSize="1.375rem">
            {title}
          </Text>
        )}
        {children}
      </ModalContent>
    </Dim>
  );
};
