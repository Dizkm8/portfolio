interface Props {
    projectId: string;
}

const useProjectDetail = (props: Props) => {
    const { projectId } = props;
    return {
        projectDetail: {
            id: projectId,
            name: 'Project 1',
            description: 'Project 1 description',
            status: 'active',
            startDate: '2021-01-01',
            endDate: '2021-12-31',
            budget: 1000000,
            spent: 500000,
            duration: 365,
            progress: 50,
        },
    };
};

export default useProjectDetail;
