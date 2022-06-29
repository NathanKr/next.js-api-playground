import { Divider } from '@mui/material';
import React from 'react';
import { APP_NAME } from 'src/utils/constants';
import styles from "styles/footer.module.css";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <Divider />
            <p>© 2022 {APP_NAME}. ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;