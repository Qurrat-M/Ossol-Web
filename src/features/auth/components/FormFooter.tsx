export function FormFooter() {
    return (
        <>
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-3 text-sm text-gray-500 font-semibold">
                    Don't have an account?
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
                Contact your SAP administrator to receive an invitation.
            </p>
        </>
    );
}
