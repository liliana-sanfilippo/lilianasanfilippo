import { Breadcrumb } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

function DynamicBreadcrumb() {
    const location = useLocation();

    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <Breadcrumb className={"my-5"}>
        <Breadcrumb.Item
    linkAs={Link}
    linkProps={{ to: '/' }}
    active={pathnames.length === 0}
        >
        Home
        </Breadcrumb.Item>

    {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
            <Breadcrumb.Item key={name} active>
            {capitalize(name)}
            </Breadcrumb.Item>
    ) : (
            <Breadcrumb.Item
                key={name}
        linkAs={Link}
        linkProps={{ to: routeTo }}
    >
        {capitalize(name)}
        </Breadcrumb.Item>
    );
    })}
    </Breadcrumb>
);
}

function capitalize(str: string) {
    return str.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

export default DynamicBreadcrumb;