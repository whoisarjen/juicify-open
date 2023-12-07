import useTranslation from 'next-translate/useTranslation'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import NavbarOnlyTitle from '@/components/NavbarOnlyTitle/NavbarOnlyTitle'

interface Tutorial_1Props {
    setStep: (arg0: string) => void
    handlePreviousStep: () => void
}

const Tutorial_1 = ({ setStep, handlePreviousStep }: Tutorial_1Props) => {
    const { t } = useTranslation('coach')

    return (
        <div className="flex h-full flex-col gap-4">
            <div>
                <IconButton aria-label="back" onClick={handlePreviousStep}>
                    <KeyboardBackspaceIcon />
                    <div />
                </IconButton>
            </div>
            <NavbarOnlyTitle title="coach:HOW_DOES_IT_WORK" />
            <div className="flex flex-1 items-center justify-center text-center">
                {t('TUTORIAL_1')}
            </div>
            <Button variant="contained" onClick={() => setStep('Tutorial_2')}>
                {t('NEXT_STEP')}
            </Button>
        </div>
    )
}

export default Tutorial_1
