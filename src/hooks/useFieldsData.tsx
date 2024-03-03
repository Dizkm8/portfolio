import { useEffect, useState } from 'react';
import contactMeFieldsData from '../constants/contact-me-fields-data';
import { ContactMeInformation } from '../interfaces/contact-me-information.interface';

const useFieldsData = () => {
    const [fieldsData, setFieldsData] = useState<ContactMeInformation[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const fieldsData: ContactMeInformation[] = contactMeFieldsData;

            setFieldsData(fieldsData);
        };

        fetchProjects();
    }, []);

    return fieldsData;
};

export default useFieldsData;
