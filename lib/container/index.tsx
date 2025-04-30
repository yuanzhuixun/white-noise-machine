import React from 'react'
import { View } from '@ray-js/ray';
import styles from './index.module.less';
import clsx from 'clsx'

interface Props {
	onClick?: () => void
	children: React.ReactNode
	customClass?: string
}

export const Container = ({ children, customClass, onClick }: Props) => {
	return (
		<View className={clsx(styles.container, customClass)} hoverClassName={styles.hovercontainer} onClick={onClick}>{children}</View>
	)
}