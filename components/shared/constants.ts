export const States: string[] = [
    'AL', 'AK', 'AZ', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
    'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
    'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
    'MT', 'NE', 'NV', 'NH', 'NM', 'NY', 'NC', 'ND', 
    'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN',
    'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

// User option property type
interface UserOption {
    optionTitle: string,
    optionDescription: string
    optionImgPath?: string
}

export const UserOptions: UserOption[] = [
    {
        optionTitle: 'Mercantilist',
        optionDescription: 'You own a printer (or more than one!) and want to make some money printing for others'
    },
    {
        optionTitle: 'Pioneer', // TODO working title
        optionDescription: 'You don\'t have a printer, or at least not a very good one, and you\'ll to use someone else\'s'
    }
]