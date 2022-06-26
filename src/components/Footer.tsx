import { Divider } from '@mui/material';
import React from 'react';
import styles from "styles/footer.module.css";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <Divider />
            <p>© 2020-2022 NATHAN KRASNEY. ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;