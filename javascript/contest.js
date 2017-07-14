(function(window, document) {
    // Gifshot options
    var gifType = document.querySelector('#GIFType');
    var gifHeight = document.querySelector('#gifHeight');
    var gifWidth = document.querySelector('#gifWidth');
    var filter = document.querySelector('#filter');
    var numFrames = document.querySelector('#numFrames');
    var frameDuration = document.querySelector('#frameDuration');

    // Save Elements
    var saveGIFButton = document.querySelector('#save-gif');
    var createGIFButton = document.querySelector('#create-gif');
    var downloadAttrSupported = ('download' in document.createElement('a'));

    // Preview section
    var gifshotImagePreview = document.querySelector('.verge-image-preview-section');
    var placeholderDiv = document.querySelector('.placeholder-div');
    var placeholderDivDimensions = document.querySelector('.placeholder-div-dimensions');
    var progressBar = document.querySelector('progress');

    function getSelectedOptions () {
        return {
            gifWidth: Number(gifWidth.value),
            gifHeight: Number(gifHeight.value),
            filter: filter.value,
            numFrames: Number(numFrames.value),
            frameDuration: Number(frameDuration.value),
            text: 'VergeCurrency.com',
            fontWeight: 'bold',
            fontSize: '16px',
            fontFamily: 'Arial',
            fontColor: 'white',
            textAlign: 'center',
            textYCoordinate: Number(gifHeight.value) - 10
        };
    };
    
    function updatePreview (obj) {
        obj = obj || {};

        var targetElem = obj.targetElem;
        var selectedOptions = getSelectedOptions();

        if (targetElem && (targetElem.id === 'gifWidth' || targetElem.id === 'gifHeight')) {
            if (selectedOptions.gifHeight && selectedOptions.gifWidth) {
                gifshotImagePreview.innerHTML = '';
                placeholderDiv.style.height = selectedOptions.gifHeight + 'px';
                placeholderDiv.style.width = selectedOptions.gifWidth + 'px';
                placeholderDivDimensions.innerHTML = selectedOptions.gifWidth + ' x ' + selectedOptions.gifHeight;

                if (selectedOptions.gifWidth < 60 || selectedOptions.gifHeight < 20) {
                    placeholderDivDimensions.classList.add('hidden');
                } else {
                    placeholderDivDimensions.classList.remove('hidden');
                }

                placeholderDiv.classList.remove('hidden');
            } else {
                placeholderDiv.classList.add('hidden');
            }
        }
    };

    function bindEvents () {
        createGIFButton.addEventListener('click', function (e) {
            e.preventDefault();

            var selectedOptions = getSelectedOptions();
            var method = gifType.value === 'snapshot' ? 'takeSnapShot' : 'createGIF';

            selectedOptions.progressCallback = function (captureProgress) {
                gifshotImagePreview.innerHTML = '';
                placeholderDiv.classList.add('hidden');
                progressBar.classList.remove('hidden');
                progressBar.value = captureProgress;
            }

            gifshot[method](selectedOptions, function (obj) {
                if (!obj.error) {
                    var image = obj.image;
                    var animatedImage = document.createElement('img');

                    animatedImage.src = image;

                    progressBar.classList.add('hidden');
                    progressBar.value = 0;

                    placeholderDiv.classList.add('hidden');
                    gifshotImagePreview.innerHTML = '';
                    gifshotImagePreview.appendChild(animatedImage);

                    if (downloadAttrSupported) {
                        saveGIFButton.setAttribute('href', image);
                        saveGIFButton.classList.remove('hidden');
                    }
                }
            });
        }, false);

        document.addEventListener('change', function (e) {
            updatePreview({
                targetElem: e.target
            });
        });

        document.addEventListener('keyup', function (e) {
            updatePreview({
                targetElem: e.target
            });
        });
    };

    bindEvents();
    updatePreview({
        targetElem: gifWidth
    });
}(window, document));