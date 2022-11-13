import "./pagination.css"


interface IPagination {
    pagesCount: number;
    onNext(): void;
    onPage(value: number): void;
    onPrev(): void;
    currentPage: number;
}

export const Pagination = ({
    pagesCount,
    onNext,
    onPrev,
    onPage,
    currentPage,
}: IPagination) => {

    return (
        <div className="pagination">
            <button className="pagination_navButton"
                disabled={currentPage === 1}
                onClick={onPrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#313037"
                        fillRule="evenodd"
                        d="M10.707 5.287c.19.2.29.45.29.71 0 .26-.1.51-.29.71l-4.3 4.29h13.59c.55 0 1 .45 1 1s-.45 1-1 1H6.407l4.3 4.29c.39.39.39 1.03 0 1.42-.39.39-1.03.39-1.42 0l-6-6a.988.988 0 01-.21-.32c-.02-.05-.04-.09-.04-.14a.852.852 0 010-.5c0-.05.02-.09.04-.14.05-.12.12-.23.21-.32l6-6c.39-.39 1.03-.39 1.42 0z"
                        clipRule="evenodd"
                    ></path>
                </svg> Prev
            </button>
            <div className="pagination_page">
                {[...new Array(pagesCount)].map((_, index) => (
                    <div
                        key={index}
                        onClick={() => onPage(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <button className="pagination_navButton"
                disabled={currentPage === pagesCount}
                onClick={onNext}
            >Next
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#313037"
                        fillRule="evenodd"
                        d="M13.293 18.712c-.19-.2-.29-.45-.29-.71 0-.26.1-.51.29-.71l4.3-4.29H4.003c-.55 0-1-.45-1-1s.45-1 1-1h13.59l-4.3-4.29c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l6 6c.09.09.16.2.21.32.02.05.04.09.04.14.05.16.05.34 0 .5 0 .05-.02.09-.04.14-.05.12-.12.23-.21.32l-6 6c-.39.39-1.03.39-1.42 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    );
};