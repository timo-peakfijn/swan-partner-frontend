import { Breadcrumbs, useCrumb } from "@swan-io/lake/src/components/Breadcrumbs";
import { FullViewportLayer } from "@swan-io/lake/src/components/FullViewportLayer";
import { ResponsiveContainer } from "@swan-io/lake/src/components/ResponsiveContainer";
import { Stack } from "@swan-io/lake/src/components/Stack";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import { breakpoints, spacings } from "@swan-io/lake/src/constants/design";
import { useMemo } from "react";
import { View } from "react-native";
import { AccountCountry } from "../graphql/partner";
import { GetRouteParams, Router } from "../utils/routes";
import { BeneficiarySepaWizard } from "./BeneficiarySepaWizard";
import { TypePickerLink } from "./TypePickerLink";

type Props = {
  accountMembershipId: string;
  accountId: string;
  accountCountry: AccountCountry;
  type: GetRouteParams<"AccountPaymentsBeneficiariesNew">["type"];
};

export const BeneficiaryTypePicker = ({
  accountMembershipId,
  accountId,
  accountCountry,
  type,
}: Props) => {
  // const ictEnabled = useTgglFlag("initiate_international_credit_transfer_outgoing");

  useCrumb(
    useMemo(
      () => ({
        label: "New beneficiary",
        link: Router.AccountPaymentsBeneficiariesNew({ accountMembershipId }),
      }),
      [accountMembershipId],
    ),
  );

  const links = useMemo(
    () => [
      {
        url: Router.AccountPaymentsBeneficiariesNew({ accountMembershipId, type: "sepa" }),
        icon: "lake-euro" as const,
        title: "SEPA",
        subtitle: "Save beneficiaries with accounts based in euros",
      },
      // ...(ictEnabled.getOr(false)
      //   ? [
      //       {
      //         url: Router.AccountPaymentsNew({ accountMembershipId, type: "international" }),
      //         icon: "earth-regular" as const,
      //         title: "International",
      //         subtitle: "Save beneficiaries with accounts based in currencies other than euros",
      //       },
      //     ]
      //   : []),
    ],
    [/*ictEnabled,*/ accountMembershipId],
  );

  return (
    <>
      <ResponsiveContainer
        breakpoint={breakpoints.large}
        style={{
          ...commonStyles.fill,
        }}
      >
        {({ large }) => (
          <View
            style={[
              {
                ...commonStyles.fill,
                paddingHorizontal: spacings[24],
                paddingTop: spacings[24],
              },
              large && {
                paddingHorizontal: spacings[40],
                paddingTop: spacings[40],
              },
            ]}
          >
            <Breadcrumbs />

            <Stack
              alignItems="stretch"
              space={12}
              style={[
                {
                  margin: "auto",
                  maxWidth: 500,
                  paddingVertical: spacings[24],
                },
                large && {
                  paddingVertical: spacings[40],
                },
              ]}
            >
              {links.map(({ url, icon, title, subtitle }, index) => (
                <TypePickerLink
                  key={index}
                  icon={icon}
                  title={title}
                  subtitle={subtitle}
                  url={url}
                  style={{ animationDelay: `${index * 150}ms` }}
                />
              ))}
            </Stack>
          </View>
        )}
      </ResponsiveContainer>

      <FullViewportLayer visible={type === "sepa"}>
        <BeneficiarySepaWizard
          accountCountry={accountCountry}
          accountId={accountId}
          accountMembershipId={accountMembershipId}
          onPressClose={() =>
            Router.push("AccountPaymentsBeneficiariesNew", { accountMembershipId })
          }
        />
      </FullViewportLayer>
    </>
  );
};