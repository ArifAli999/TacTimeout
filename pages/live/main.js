import Link from 'next/link';
import React from 'react';
import styles from './main.module.css'

function main() {
    return (
        <div className='container is-fluid'>

            <div className='columns is-multiline is-3'>
                <div className='column is-full'>
                    <div className={styles.colinnner_val}>
                        <Link href={'/live/val'}>
                            <a className="h2link">
                                Valorant

                            </a>
                        </Link>
                    </div>
                </div>

                <div className='column is-full'>
                <div className={styles.colinnner_fifa}>
                        <Link href={'/live/fifa'}>
                            <a className="h2link">
                                FIFA

                            </a>
                        </Link>
                    </div>
                </div>


                <div className='column is-full'>
                <div className={styles.colinnner_cs}>
                        <Link href={'/live/csgo'}>
                            <a className="h2link">
                                CS:GO
                            </a>
                        </Link>
                    </div>
                </div>


                <div className='column is-full'>
                <div className={styles.colinnner_dot}>
                        <Link href={'/live/dot'}>
                            <a className="h2link">
                                Dota-2
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default main