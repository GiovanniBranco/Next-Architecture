import { sum } from "@next-architecture/utils/math/sum";
import Text from "@next-architecture/design-system/components/text";

export default function HomeScreen() {
  return (
    <div>
      <Text tag="h1">Home do Projeto</Text>
      <Text tag="p">
        @next-architecture/utils/math/sum: sum(2,2) = {sum(2, 2)}
      </Text>

      <Text tag="h2">Texto de exemplo</Text>
    </div>
  );
}
