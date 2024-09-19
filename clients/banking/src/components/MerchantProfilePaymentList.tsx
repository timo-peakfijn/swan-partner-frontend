import { useQuery } from "@swan-io/graphql-client";
import { View } from "react-native";
import { MerchantProfilePaymentsDocument } from "../graphql/partner";

type Props = {
  merchantProfileId: string;
};

const PER_PAGE = 20;

export const MerchantProfilePaymentList = ({ merchantProfileId }: Props) => {
  const [data, { setVariables }] = useQuery(MerchantProfilePaymentsDocument, {
    first: PER_PAGE,
    merchantProfileId,
  });

  return <View />;
};
