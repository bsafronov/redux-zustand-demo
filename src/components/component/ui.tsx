import { useComponentContext } from "./context";
import { ComponentProvider } from "./provider";
import { ProviderState } from "./state";

type StatelessProps = {
  styles?: React.CSSProperties;
};

type Props = ProviderState & StatelessProps;

export const Component = ({ defaultValue, onChange, value, styles }: Props) => {
  return (
    <ComponentProvider
      defaultValue={defaultValue}
      onChange={onChange}
      value={value}
    >
      <Inner styles={styles} />
    </ComponentProvider>
  );
};

const Inner = ({ styles }: StatelessProps) => {
  return (
    <>
      <div style={styles} />
      <CounterDisplay />
      <CounterIncrementor />
      <Checkbox />
    </>
  );
};

const CounterDisplay = () => {
  const count = useComponentContext((s) => s.numeric);

  return <div>{count}</div>;
};

const CounterIncrementor = () => {
  const set = useComponentContext((s) => s.set);

  return (
    <button onClick={() => set("numeric", (prev) => prev + 1)}>
      Increment
    </button>
  );
};

const Checkbox = () => {
  const checked = useComponentContext((s) => s.boolean);
  const set = useComponentContext((s) => s.set);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => set("boolean", e.target.checked)}
    />
  );
};
