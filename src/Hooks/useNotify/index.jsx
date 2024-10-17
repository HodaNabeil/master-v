import { useToast } from "@chakra-ui/react"



/**
 * Returns a function that displays a toast notification.
 *
 * @return {function} A function that takes in the type, title, and message parameters and displays a toast notification.
 */
export default function useNotify() {
    const toast = useToast()
    /**
     * Displays a toast notification with the given type, title, and message.
     *
     * @param {string} type - The type of the toast notification.
     * @param {string} title - The title of the toast notification.
     * @param {string} message - The message of the toast notification.
     * @returns {function} A function that displays the toast notification.
     */
    // info , error, warn , success
    return (type, message, rtl) => {
        toast({
            // title: title,
            position: rtl ? 'top-right' : 'top-left',
            description: message,
            status: type == 'warn' ? 'warning' : type,
            duration: 2000,
            isClosable: true
        })
    }
}
