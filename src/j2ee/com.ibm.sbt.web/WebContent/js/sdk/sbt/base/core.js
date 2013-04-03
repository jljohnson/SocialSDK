/*
 * � Copyright IBM Corp. 2012
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
 * implied. See the License for the specific language governing 
 * permissions and limitations under the License.
 */

/**
 * Social Business Toolkit SDK. 
 * Helpers for the core capabilities
 */
define([],function() {

	return {
		// Namespaces used when parsing Atom feeds
        namespaces : {
            o : "http://ns.opensocial.org/2008/opensocial",
            app : "http://www.w3.org/2007/app",
            thr : "http://purl.org/syndication/thread/1.0",
            fh : "http://purl.org/syndication/history/1.0",
            snx : "http://www.ibm.com/xmlns/prod/sn",
            opensearch : "http://a9.com/-/spec/opensearch/1.1/",
            a : "http://www.w3.org/2005/Atom",
            h : "http://www.w3.org/1999/xhtml",
            td: "urn:ibm.com/td",
            relevance: "http://a9.com/-/opensearch/extensions/relevance/1.0/",
            ibmsc: "http://www.ibm.com/search/content/2010",
            xhtml: "http://www.w3.org/1999/xhtml"
        },
        
        feedXPath : {
            "entry" : "/a:feed/a:entry",
            "totalResults" : "/a:feed/opensearch:totalResults",
            "startIndex" : "/a:feed/opensearch:startIndex",
            "itemsPerPage" : "/a:feed/opensearch:itemsPerPage"
        },
                
        entryXPath : {
            "title" : "a:title",
            "summaryText" : "a:summary[@type='text']",
            "selfUrl" : "a:link[@rel='self']/@href",
            "terms" : "a:category/@term",
            "contentHtml" : "a:content[@type='html']",
            "published" : "a:published",
            "updated" : "a:updated",
            "authorId" : "a:author/snx:userid",
            "contributorId" : "a:contributor/snx:userid"
        }	
	};
});