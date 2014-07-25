var WF = WF || {};
WF.exp = {

	appendCss: function(){
		jQuery('body').append('<style>#wf_container{}#wf_container h5{font-size:19px;font-family:}.wf_mainhead{}.wf_mainhead span{font-family:"OpenSansRegular";font-size:30px;color:#EF672F;}#wf_container p{}.wf_cta{font-size:17px;font-family:"OpenSansRegular";color:#312F2B;}.wf_link{color:#F46931;text-transform:lowercase;}.wf_link:hover{text-decoration:underline;}</style>');
	},

	addSection: function(){
		jQuery('.pane-header-large-media-slideshow')
			.after('<div class="panel-separator"></div><div class="panel-pane" id="wf_container"><div class="pane-content"><div class="container"><div class="row-fluid"><div class="span12"><h4>BUILD YOUR BUSINESS</h4><div class="wf_mainhead"><img src="//cdn.optimizely.com/img/5936060/d6eb74d7986a4984b0e6f4702f230371.jpg" /><span>Enterprise Edition</span></div><p>Magento Enterprise Edition is the high performance, scalable eCommerce solution for fast-growing and large businesses. <br /> It&apos;s got the enterprise-class features and the flexibility you need to create an eCommerce solution tailored to your unique needs. And to help you drive more traffic to your store, convert browsers into buyers and boost online revenue.</p><p><strong>Flexible, differentiated consumer experiences<br />Hundreds of extensions <br />Global network of partners and certified developers </strong></p><p class="wf_cta"><a class="btn large copper cta" href="http://enterprise.magento.com/">Learn More</a> Or request a <a href="/explore/demo" class="wf_link">free demo</a></p></div></div></div></div></div>');
	},

	init: function(){
		this.addSection();
	}
};
WF.exp.init();