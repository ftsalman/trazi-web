import React from "react";
import { Button } from "../ui/button/Button";
import { IconAutoStop, IconBin, IconChat, IconCopy, IconDownload, IconEdit, IconLinkVisit, IconPrint, IconStack, IconVisiblity, IconWhatsapp, IconWhatsApp } from "../../assets/icons/interfaceIcons2";
import { cn } from "../../utils/utils";
import PropTypes from "prop-types";

export const ActionsCell = ({ data = null, actions = {}, className = "" }) => {
  return (
    <>
      <div className={cn("px-4 py-2 flex justify-center gap-2", className)}>
        {actions?.changePassword && (
          <Button
            className={cn("size-8 p-0.5 ", actions?.changePasswordClassName)}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.changePassword(data);
            }}
            title="Change Password"
          >
            {/* <IconKe size="16" /> */}
          </Button>
        )}

        {actions?.scheduleCancel && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            disabled={data?.STATUS !== "PENDING" && data?.STATUS !== "QUEUE"}
            title={
              data?.STATUS === "PENDING" || data?.STATUS === "QUEUE"
                ? "Cancel this scheduled broadcast"
                : "This broadcast can no longer be cancelled"
            }
            onClick={(e) => {
              e.stopPropagation();
              if (data?.STATUS === "PENDING" || data?.STATUS === "QUEUE") {
                actions.scheduleCancel(data);
              }
            }}
          >
            {/* <IconCancelScheduledSend size="18" /> */}
          </Button>
        )}

        {actions?.assign && (
          <Button
            className={cn("size-8 p-0.5 ", actions?.assignClassName)}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.assign(data, e);
            }}
            title="Assign"
          >
            <IconWhatsApp size="14" />
          </Button>
        )}

        {actions?.updateDeliveryDetails && (
          <Button
            className={cn("size-8 p-0.5")}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.updateDeliveryDetails(data);
            }}
            title="Update delivery details"
          >
            {/* <IconDeliveryTruck size="20" /> */}
          </Button>
        )}

        {actions?.whatsapp && (
          <Button
            className={cn("size-8 p-0.5 ", actions?.assignClassName)}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.assign(data, e);
            }}
            title="Chat"
          >
            <IconWhatsapp size="18" />
          </Button>
        )}

        {actions?.duplicate && (
          <ProtectedFeatureWrapper featCode="CHATBOT">
            <Button
              className={cn("size-8 p-0.5 ", actions?.duplicateClassName)}
              variant="tertiary"
              onClick={(e) => {
                e.stopPropagation();
                actions.duplicate(data);
              }}
              title="Duplicate"
            >
              <IconStack />
            </Button>
          </ProtectedFeatureWrapper>
        )}

        {actions?.kioskview && (
          <Link
            to={`/kiosk/${data?.BASE64_ID}`}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className="size-8 p-0.5"
              variant="tertiary"
              title="kioskview"
            >
              <IconLinkVisit />
            </Button>
          </Link>
        )}

        {actions?.setAvailability && (
          <Button
            className={cn("size-8 p-0.5")}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.setAvailability(data);
            }}
            title="Set time availability"
          >
            {/* <IconAddTime size="16" /> */}
          </Button>
        )}

        {actions?.edit && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.edit(data);
            }}
          >
            <IconEdit />
          </Button>
        )}

        {actions?.download && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.download();
            }}
          >
            <IconDownload />
          </Button>
        )}

        {actions?.print && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.print();
            }}
          >
            <IconPrint size="18" />
          </Button>
        )}

        {actions?.copy && (
          <Button
            className={cn("size-8 p-0.5", actions?.copyClassName)}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.copy(data);
            }}
            title="copy"
          >
            <IconCopy size="18" />
          </Button>
        )}

        {actions?.view && (
          <Button
            className={cn("size-8 p-0.5", actions?.viewClassName)}
            variant="tertiary"
            onClick={() => actions.view(data)}
            title="view"
          >
            <IconVisiblity size="18" />
          </Button>
        )}

        {actions?.delete && (
          <Button
            className={cn(
              "size-8 p-0.5 text-red-400 focus:shadow-red-100",
              actions?.viewClassName
            )}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.delete(data);
            }}
            title="Delete"
          >
            <IconBin />
          </Button>
        )}
        {actions?.updateOrderStatus && (
          <Button
            className={cn("size-8 p-0.5")}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.updateOrderStatus(data);
            }}
            title="Update order status"
          >
            <IconAutoStop size="16" />
          </Button>
        )}

        {actions?.openChat && (
          <Button
            className={cn("size-8 p-0.5")}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.openChat(data);
            }}
            title="Open chats"
          >
            <IconChat size="18" />
          </Button>
        )}
      </div>
    </>
  );
};

ActionsCell.propTypes = {
  actions: PropTypes.object,
  data: PropTypes.any,
  className: PropTypes.string,
};