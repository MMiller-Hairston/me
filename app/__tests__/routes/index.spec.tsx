import renderer from 'react-test-renderer';
import Index from '~/routes';

test('Index should render', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
