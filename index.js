panel.plugin("kommutron/flags", {
	fields: {
		likes: {
			props: {
				label: String,
				help: String,
				likeCount: String
			},
			template: `
			<k-field class="k-flags-field" disabled="true" :label="label" :help="help">
				<k-input icon="heart" theme="field" type="text" name="textfield" :value="likeCount">
			</k-field>
			`
		},
		strikes: {
			props: {
				label: String,
				help: String,
				strikeCount: String
			},
			template: `
			<k-field class="k-flags-field" disabled="true" :label="label" :help="help">
				<k-input icon="remove" theme="field" type="text" name="textfield" :value="strikeCount">
			</k-field>
			`
		},
		bells: {
			props: {
				label: String,
				help: String,
				bellCount: String
			},
			template: `
			<k-field class="k-flags-field" disabled="true" :label="label" :help="help">
				<k-input icon="bell" theme="field" type="text" name="textfield" :value="bellCount">
			</k-field>
			`
		},
		photos: {
			props: {
				label: String,
				help: String,
				photoCount: String
			},
			template: `
			<k-field class="k-flags-field" disabled="true" :label="label" :help="help">
				<k-input icon="image" theme="field" type="text" name="textfield" :value="photoCount">
			</k-field>
			`
		},
	}
});