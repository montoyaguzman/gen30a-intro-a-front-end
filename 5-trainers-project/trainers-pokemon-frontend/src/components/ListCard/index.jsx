import './styles.css';

function ListCard({ children }) {

    return (
        <>
            <div className='container-list container-80'>
                {children}
            </div>
        </>
    );

}

export { ListCard };