import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import style from './Image.module.scss';

const Image = forwardRef(({ alt, src, className, fallback : customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
