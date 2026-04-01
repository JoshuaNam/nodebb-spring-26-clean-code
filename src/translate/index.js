'use strict';

const translatorApi = module.exports;

const TRANSLATOR_URL = process.env.TRANSLATOR_URL || 'http://localhost:5000';

translatorApi.translate = async function (postData) {
	try {
		const response = await fetch(
			`${TRANSLATOR_URL}/?content=${encodeURIComponent(postData.content)}`
		);
		const data = await response.json();
		const isEnglish = data.is_english ? 'true' : 'false';
		const translatedContent = data.translated_content || '';
		return [isEnglish, translatedContent];
	} catch (err) {
		return ['true', ''];
	}
};
