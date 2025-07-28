import HomeIcon from '../assets/icon/Home.svg';
import TagIcon from '../assets/icon/Tag.svg';
import InfluencerIcon from '../assets/icon/Influencer.svg';
import SearchIcon from '../assets/icon/Search.svg';

export const menuItems = [
    {
        id: 'home',
        label: 'TOP',
        icon: (
            <img
                src={HomeIcon}
                alt="Home"
                width={20}
                height={19}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
        ),
        hasSubmenu: false
    },
    {
        id: 'ブランド',
        label: 'ブランド',
        icon: (
            <img
                src={TagIcon}
                alt="Tag"
                width={20}
                height={19}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
        ),
        linkRouter: '/SalesRanking',
        hasSubmenu: true,
        submenu: [
        ]
    },
    {
        id: 'インフルエンサー',
        label: 'インフルエンサー',
        icon: (
            <img
                src={InfluencerIcon}
                alt="Influencer"
                width={20}
                height={19}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
        ),
        hasSubmenu: true,
        submenu: []
    },
    {
        id: '比較・検索',
        label: '比較・検索',
        icon: (
            <img
                src={SearchIcon}
                alt="Search"
                width={20}
                height={19}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
        ),
        hasSubmenu: true,
        submenu: []
    },
];