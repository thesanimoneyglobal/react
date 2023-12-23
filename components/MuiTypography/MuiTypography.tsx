import {Typography} from "@mui/material";
import styles from './MuiTypography.module.css'


function MuiTypography() {
    return <div className={styles.containerTitle}>
    <Typography sx={{ fontWeight: 'bold', mb: 2}} variant={'h1'}>First Heading</Typography>
    <Typography variant={'h2'}>Second Heading</Typography>
    <Typography variant={'h3'}>Third Heading</Typography>
    <Typography variant={'h4'}>Fourth Heading</Typography>
    <Typography variant={'body1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, harum.</Typography>
    </div>

}

export default MuiTypography