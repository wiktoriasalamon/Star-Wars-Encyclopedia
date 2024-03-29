import { render, fireEvent } from 'utils/test-utils';
import Input from './Input';



describe('Input component', () => {
  it('should render input element', () => {
    const { getByTestId } = render(<Input />);

    expect(getByTestId('sample-input'))
      .toBeInTheDocument();
  });

  it('should display given placeholder', () => {
    const placeholderText = 'Name';
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} />
    );

    expect(getByPlaceholderText(placeholderText))
      .toBeInTheDocument();
  });

  it('should display given label', () => {
    const labelText = "Name";
    const { getByLabelText } = render(
      <Input name={labelText} label={labelText}/>
      );

    expect(getByLabelText(labelText))
      .toBeInTheDocument();
  });

  it('should display proper value', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('sample-input');

    expect(input).toBeInTheDocument();

    fireEvent.change(
      input,
      { target: { value: 'hello' } },
      );

    expect(input).toHaveValue('hello');
  });

})